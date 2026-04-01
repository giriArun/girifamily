export default function FloatingHeader({ date }) {
    return (
        <>  
            <div className="floating-header">
                <div className="d-flex justify-content-between">
                    <div className="ms-3">i</div>
                    <div className="">GIRI FAMILY TREE</div>
                    <div className="me-3 fs-6">{date && <small className="text-muted">Updated: {date}</small>}</div>
                </div>
            </div>
        </>
    );
}
