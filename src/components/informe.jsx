import React from "react";
import ReactMarkdown from "react-markdown";
import resumen from "../../docs_karcha/01_resumen_karcha.md?raw";
import marco from "../../docs_karcha/02_marco_karcha.md?raw";
import delitos from "../../docs_karcha/03_delitos_karcha.md?raw";
import comparacion from "../../docs_karcha/04_comparacion_karcha.md?raw";
import responsabilidades from "../../docs_karcha/05_responsabilidades_karcha.md?raw";
import datos from "../../docs_karcha/06_datos_karcha.md?raw";
import conclusiones from "../../docs_karcha/07_conclusiones_karcha.md?raw";
import prompts from "../../docs_karcha/08_prompts_karcha.md?raw";

const sections = [
  { id: "resumen", title: "Resumen", content: resumen },
  { id: "marco", title: "Marco", content: marco },
  { id: "delitos", title: "Delitos", content: delitos },
  { id: "comparacion", title: "Comparación", content: comparacion },
  { id: "responsabilidades", title: "Responsabilidades", content: responsabilidades },
  { id: "datos", title: "Datos", content: datos },
  { id: "conclusiones", title: "Conclusiones", content: conclusiones },
  { id: "prompts", title: "Prompts", content: prompts },
];

export default function Informe() {
  return (
    <div className="informe-page">
      <header className="page-header">
        <h1 className="page-title">Hackeo Ransomware Rhysida</h1>
      </header>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="markdown-section">
          <h2>{section.title}</h2>
          <div className="markdown-container">
            <ReactMarkdown>{section.content}</ReactMarkdown>
          </div>
        </section>
      ))}
    </div>
  );
}