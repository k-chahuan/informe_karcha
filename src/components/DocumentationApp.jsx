import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Shield, Menu, X, Home } from 'lucide-react';
import './DocumentationApp.css';

const DOCS = [
  { id: 'resumen', name: 'Resumen', file: '01_resumen_karcha.md', order: 1 },
  { id: 'marco', name: 'Marco Legal', file: '02_marco_karcha.md', order: 2 },
  { id: 'delitos', name: 'Delitos', file: '03_delitos_karcha.md', order: 3 },
  { id: 'comparacion', name: 'Comparación', file: '04_comparacion_karcha.md', order: 4 },
  { id: 'responsabilidades', name: 'Responsabilidades', file: '05_responsabilidades_karcha.md', order: 5 },
  { id: 'datos', name: 'Datos', file: '06_datos_karcha.md', order: 6 },
  { id: 'conclusiones', name: 'Conclusiones', file: '07_conclusiones_karcha.md', order: 7 },
  { id: 'prompts', name: 'Prompts', file: '08_prompts_karcha.md', order: 8 },
];

export default function DocumentationApp() {
  const [currentDoc, setCurrentDoc] = useState('resumen');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Cargar contenido del markdown seleccionado
  useEffect(() => {
    const doc = DOCS.find(d => d.id === currentDoc);
    if (doc) {
      setLoading(true);
      fetch(`/${doc.file}`)
        .then(res => res.text())
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error cargando documento:', err);
          setContent('Error al cargar el documento');
          setLoading(false);
        });
    }
  }, [currentDoc]);

  const currentDocTitle = DOCS.find(d => d.id === currentDoc)?.name || 'Documento';

  return (
    <div className="doc-app min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'} bg-slate-900 text-white transition-all duration-300`}>
        <div className="sidebar-header p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <Shield size={28} className="text-red-400" />
            <div className="hidden-mobile">
              <h1 className="text-lg font-bold">Karcha</h1>
              <p className="text-xs text-slate-400">Informe Legal</p>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav p-4 space-y-2">
          {DOCS.map(doc => (
            <button
              key={doc.id}
              onClick={() => {
                setCurrentDoc(doc.id);
                setSidebarOpen(false); // Cerrar sidebar en móvil
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                currentDoc === doc.id
                  ? 'bg-red-500 text-white font-semibold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-xs font-bold w-5 text-center">{doc.order}</span>
                <span className="hidden-mobile">{doc.name}</span>
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-900 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="menu-toggle lg:hidden text-slate-300 hover:text-white"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center gap-3">
                {currentDoc !== 'resumen' && (
                  <button
                    onClick={() => setCurrentDoc('resumen')}
                    className="text-slate-400 hover:text-white transition"
                    title="Volver al inicio"
                  >
                    <Home size={20} />
                  </button>
                )}
                <h1 className="text-2xl font-bold">
                  {currentDoc === 'resumen' ? 'Evaluación 2 – Unidad 2' : currentDocTitle}
                </h1>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end">
              <p className="text-slate-300 text-sm">TI3034 – Seguridad de la Información</p>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mb-4"></div>
                    <p className="text-slate-600">Cargando documento...</p>
                  </div>
                </div>
              ) : (
                <div className="markdown-content">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-6 text-slate-900" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-3xl font-bold mb-4 mt-8 text-slate-800" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mb-3 mt-6 text-slate-800" {...props} />,
                      h4: ({node, ...props}) => <h4 className="text-xl font-semibold mb-2 mt-4 text-slate-700" {...props} />,
                      p: ({node, ...props}) => <p className="text-slate-700 mb-4 leading-relaxed" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-slate-700" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-700" {...props} />,
                      li: ({node, ...props}) => <li className="text-slate-700 mb-2" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-red-500 pl-4 py-2 my-4 bg-slate-100 italic text-slate-700" {...props} />,
                      code: ({node, inline, ...props}) => inline ? (
                        <code className="bg-slate-100 px-2 py-1 rounded text-red-600 font-mono text-sm" {...props} />
                      ) : (
                        <code className="bg-slate-800 text-slate-100 p-4 rounded-lg block my-4 overflow-auto font-mono text-sm" {...props} />
                      ),
                      table: ({node, ...props}) => <table className="w-full border-collapse my-4 border border-slate-300" {...props} />,
                      th: ({node, ...props}) => <th className="bg-slate-100 border border-slate-300 p-2 text-left font-semibold" {...props} />,
                      td: ({node, ...props}) => <td className="border border-slate-300 p-2 text-slate-700" {...props} />,
                      a: ({node, ...props}) => <a className="text-red-500 hover:text-red-700 underline" {...props} />,
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-100 text-slate-600 text-sm py-6 px-6 border-t border-slate-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span>Estudiante: Karim Eduardo Chahuan Segura</span>
            <span>Docente: Rubén Schnettler L. – INACAP Valparaíso</span>
            <span>{currentDocTitle}</span>
          </div>
        </footer>
      </div>

      {/* Overlay para cerrar sidebar en móvil */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
