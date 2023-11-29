import '../../style/project/ProjectSpec.css'

function ProjectSpec({specs}) {

    return <ul className="project-spec">
        {specs.map(spec => (
            <li>
                <h3 className="spec-title">{spec.title}</h3>
                <div>
                    {spec.lines.map(line => <span className="spec-line">
                        {line}
                    </span>)}
                </div>
            </li>
        ))}
    </ul>
}

export default ProjectSpec;