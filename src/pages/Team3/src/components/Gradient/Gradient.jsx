function Gradient({ gradient, infInGra, h1Gra, pGra }) {
    return (
      <div className={`Gra ${gradient}`}>
        <h6>{infInGra}</h6>
        <h1>{h1Gra}</h1>
        <p>{pGra}</p>
      </div>
    );
}
export default Gradient;