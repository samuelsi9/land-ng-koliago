export default function AndroidModal({ open, onClose }) {
  return (
    <div
      className={`android-modal${open ? " android-modal--open" : ""}`}
      id="android-download-modal"
      aria-hidden={open ? "false" : "true"}
      role="dialog"
      aria-labelledby="android-modal-title"
      aria-modal="true"
    >
      <div
        className="android-modal__backdrop js-android-modal-close"
        tabIndex={-1}
        role="presentation"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
      />
      <div className="android-modal__panel">
        <button
          type="button"
          className="android-modal__close js-android-modal-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="android-modal__title" id="android-modal-title">
          Download Koliago for Android
        </h2>
        <p className="android-modal__apology">
          We are still working on publishing Koliago on the Google Play Store.
          Sorry for the extra steps, Android users — and thank you for your
          patience while we finish the rollout.
        </p>
        <p className="android-modal__steps-title">After you download</p>
        <ol className="android-modal__steps">
          <li>
            Tap <strong>Download koliaGo.zip</strong> and wait until the file
            finishes.
          </li>
          <li>
            Open your <strong>Files</strong> app (or your browser’s downloads
            folder) and find <strong>koliaGo.zip</strong>.
          </li>
          <li>
            <strong>Unzip</strong> the archive (tap the file and choose{" "}
            <em>Extract</em> / <em>Unzip</em>, or use a zip app).
          </li>
          <li>
            Open the extracted folder and tap the <strong>.apk</strong> file,
            then allow installs from this source if Android asks.
          </li>
          <li>
            Follow the prompts to <strong>Install</strong> and open Koliago.
          </li>
        </ol>
        {/* for testing purposes */}
        <a
          href="https://github.com/DeograciasGraole/land-ng-koliago/releases/download/v1.0/koliaGo.app.zip"
          className="android-modal__download js-android-download-zip"
        >
          Download koliaGo.zip
        </a>
      </div>
    </div>
  );
}
