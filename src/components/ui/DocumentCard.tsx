import { FaDownload, FaEye, FaLock } from "react-icons/fa";
import type { Document } from "../../data/documents";

interface Props {
  document: Document;
}

function DocumentCard({ document }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-blue-500">

      <div className="text-5xl">
        {document.icon}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {document.title}
      </h3>

      <p className="mt-2 text-slate-400">
        {document.issuer}
      </p>

      {document.updated && (
        <p className="mt-2 text-sm text-slate-500">
          Updated {document.updated}
        </p>
      )}

      {document.available ? (

        <div className="mt-6 flex gap-4">

          <a
            href={document.file}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-500 px-4 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
          >
            <FaEye />
          </a>

          <a
            href={document.file}
            download
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            <FaDownload />
          </a>

        </div>

      ) : (

        <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-slate-400">
          <FaLock />
          Coming Soon
        </div>

      )}

    </div>
  );
}

export default DocumentCard;