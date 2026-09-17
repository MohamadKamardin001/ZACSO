export default function LoadingScreen({ hidden }: { hidden: boolean }) {
  return (
    <div className={`loading-screen${hidden ? ' is-hidden' : ''}`} role="status" aria-label="Loading ZACSO">
      <div className="loading-screen-inner">
        <img
          src="/zacso.png"
          alt="ZACSO"
          className="loading-screen-logo"
        />
        <span className="loading-screen-bar" aria-hidden="true" />
        <p>Creating an inclusive Zanzibar</p>
      </div>
    </div>
  );
}
