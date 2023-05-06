import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <h1>Some Things I've built..</h1>
      <ul>
        <li className="active">Featured</li>
        <li>All apps</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/pathfinding_v.png" alt="" />
          <h3>Pathfinding Visualizer</h3>
        </div>
        <div className="item">
          <h3>Task Management System</h3>
          <img src="assets/pathfinding_v.png" alt="" />
        </div>
      </div>
    </div>
  );
}
