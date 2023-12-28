import '../../style/project/ProjectSpec.css'

function ProjectSpec({specs}) {

    return <ul className="project-spec">
        {specs.map((spec, i) => (
            <li key={i}>
                <h3 className="spec-title">{spec.title}</h3>
                <div>
                    {spec.lines.map((line, j) => <span key={j}
                                                       className="spec-line">
                        {line}
                    </span>)}
                </div>
            </li>
        ))}
    </ul>
}

export default ProjectSpec;