import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Make Labs Starter Template" },
  { name: "description", content: "This is a starter template." },
];

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center bg-white rounded-2xl px-12 py-16 gap-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-600 mb-2">
          <span className="text-white text-3xl font-bold select-none">M</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">make.inc</h1>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          This is a starter template.
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Your AI agent is working and you should see changes soon.
        </p>
      </div>
    </div>
  );
}
