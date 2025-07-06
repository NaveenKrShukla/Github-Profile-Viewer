import React from "react";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-grid">
      {repos.map((repo) => (
        <div className="repo-card" key={repo.id}>
          <h3 className="repo-name">{repo.name}</h3>
          <p className="repo-desc">
            {repo.description ? repo.description : "No description provided."}
          </p>
          <div className="repo-meta">
            <span>⭐ {repo.stargazers_count}</span>
            {repo.language && <span>🖋 {repo.language}</span>}
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            View Repo →
          </a>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
