import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.avatar_url} alt="Avatar" className="avatar" />
      <div className="profile-info">
        <h2>{profile.name || profile.login}</h2>
        {profile.bio && <p className="bio">{profile.bio}</p>}

        <div className="profile-stats">
          <span>👥 {profile.followers} followers</span>
          <span>•</span>
          <span>👤 {profile.following} following</span>
          <span>•</span>
          <span>📦 {profile.public_repos} repos</span>
        </div>

        <a
          href={profile.html_url}
          className="profile-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
