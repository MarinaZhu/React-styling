import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMapMarkerAlt, faRuler, faHeart, faStar, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

function Card({ profile, onSwipe, swipeDirection }) {
  const handleLike = () => onSwipe('right');
  const handleDislike = () => onSwipe('left');
  const handleStar = () => onSwipe('up');

  return (
    <div className={`card ${swipeDirection ? `swipe-${swipeDirection}` : ''}`}>
      <img src={profile.image} alt={profile.name} className="profile-image" />
      <div className="profile-info">
        <div className="header">
          <h2>
            {profile.name}, {profile.age}{' '}
            <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" />
          </h2>
        </div>
        <div className="location-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>{profile.location}</span>
        </div>
        <div className="distance-info">
          <FontAwesomeIcon icon={faRuler} className="icon" />
          <span>{profile.distance} km away</span>
        </div>
        <hr />
        <div className="looking-for-info">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>Looking for: {profile.lookingFor}</span>
        </div>
        <hr />
        <h3>About Me</h3>
        <p className="about">{profile.about}</p>
        <hr />
        <h3>Interests</h3>
        <div className="interests">
          {profile.interests.map((interest, index) => (
            <span key={index} className="interest">{interest}</span>
          ))}
        </div>
        <hr />
        <div className="actions">
          <button className="action-btn dislike" onClick={handleDislike}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button className="action-btn star smaller" onClick={handleStar}>
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button className="action-btn like" onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
