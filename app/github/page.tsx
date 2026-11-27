import { Metadata } from 'next';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson, VscStarEmpty, VscRepoForked, VscLinkExternal, VscGithub } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

export const metadata: Metadata = {
  title: 'GitHub',
};

export const revalidate = 60;

// Public username; the env var can override it, but the build must not depend on it.
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || '2005-Aneeshdutt';

const githubHeaders: HeadersInit = process.env.GITHUB_API_KEY
  ? { Authorization: `Bearer ${process.env.GITHUB_API_KEY}` }
  : {};

async function getGithubData() {
  const userRes = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    { headers: githubHeaders }
  );
  if (!userRes.ok) {
    throw new Error(`Failed to fetch user: ${userRes.status}`);
  }
  const user: User = await userRes.json();

  // Fetch every public repo so star/fork totals cover all of them, not just the 6 shown
  const repoRes = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`,
    { headers: githubHeaders }
  );
  if (!repoRes.ok) {
    throw new Error(`Failed to fetch repos: ${repoRes.status}`);
  }
  const allRepos: Repo[] = await repoRes.json();

  return {
    user,
    // Skip forks and the profile README repo so only original projects are shown
    repos: allRepos
      .filter((repo) => !repo.fork && repo.name !== user.login)
      .slice(0, 6),
    totalStars: allRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
    totalForks: allRepos.reduce((acc, repo) => acc + repo.forks, 0),
  };
}

export default async function GithubPage() {
  let data: Awaited<ReturnType<typeof getGithubData>>;
  try {
    data = await getGithubData();
  } catch (error) {
    // GitHub's API can rate-limit (403) or fail during a build; show a fallback
    // instead of failing the whole deployment. The page revalidates every 60 s.
    console.error('GitHub page:', error);
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>Aneesh Dutt</h1>
              <span className={styles.handle}>@{GITHUB_USERNAME}</span>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <VscGithub size={18} />
              <span>View Profile</span>
              <VscLinkExternal size={14} />
            </a>
          </header>
          <p className={styles.sectionTitle}>
            GitHub stats are temporarily unavailable. See everything on my GitHub profile.
          </p>
        </div>
      </div>
    );
  }
  const { user, repos, totalStars, totalForks } = data;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.profile}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={80}
              height={80}
              priority
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>Aneesh Dutt</h1>
              <span className={styles.handle}>@{user.login}</span>
            </div>
          </div>

          <a 
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <VscGithub size={18} />
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepo size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.public_repos}</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscPerson size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.followers}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscStarEmpty size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {totalStars}
              </span>
              <span className={styles.statLabel}>Stars Earned</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepoForked size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {totalForks}
              </span>
              <span className={styles.statLabel}>Total Forks</span>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contribution Activity</h2>
          <div className={styles.contributions}>
            <GitHubCalendar
              username={GITHUB_USERNAME}
              hideColorLegend
              hideMonthLabels
              colorScheme="dark"
              theme={{
                dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{
                width: '100%',
              }}
            />
          </div>
        </section>

        {/* Repositories */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Repositories</h2>
            <a 
              href={`https://github.com/${user.login}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewAll}
            >
              View All
              <VscLinkExternal size={14} />
            </a>
          </div>
          
          <div className={styles.reposGrid}>
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
