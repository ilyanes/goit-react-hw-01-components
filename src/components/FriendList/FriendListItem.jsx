export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item">
      <div
        className="status"
        style={{
          backgroundColor: isOnline ? "green" : "red",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
        }}
      ></div>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
