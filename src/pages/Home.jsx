import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProfileCard from '../components/ProfileCard';
import RepoList from '../components/RepoList';
import FilterBar from '../components/FilterBar';
import Loader from '../components/Loader';

function Home() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('updated');
  const [selectedLang, setSelectedLang] = useState('all');
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError('');
      setProfile(null);
      setRepos([]);

      const headers = {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      };

      const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
      if (!userRes.ok) throw new Error('User not found');
      const userData = await userRes.json();

      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`,
        { headers }
      );
      if (!reposRes.ok) throw new Error('Failed to fetch repos');
      const reposData = await reposRes.json();

      setProfile(userData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  const languages = [...new Set(repos.map((repo) => repo.language).filter(Boolean))];
  const filteredRepos =
    selectedLang === 'all'
      ? repos
      : repos.filter((repo) => repo.language === selectedLang);

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
    if (sortBy === 'updated') return new Date(b.updated_at) - new Date(a.updated_at);
    return 0;
  });

  return (
    <main className="home">
      {/* Hide input card after search success */}
      {!profile && !loading && (
        <div className="glass-card">
          <h2>Enter a GitHub username</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="e.g. NaveenKrShukla"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      )}

      {loading && <Loader />}
      {error && <p className="error-text">{error}</p>}
      {profile && <ProfileCard profile={profile} />}
      {!loading && repos.length > 0 && (
        <>
          <FilterBar
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
            languages={languages}
          />
          <RepoList repos={sortedRepos} />
        </>
      )}
    </main>
  );
}

export default Home;
