import React from 'react'
import { Clipboard2Check, Headset, PatchCheck } from 'react-bootstrap-icons';
import "../reset.css";
import '../styles/Overview.css'

function Overview() {
    return (
        <div>
            <section className="overview-section">
                <div className="container-xxl">
                    <div className="overview-items">
                        <div className="row">
                            {/* Item 1 */}
                            <div className="overview-item">
                                <div className="overview-icon">
                                    {/* verified icon */}
                                    <PatchCheck/>
                                </div>
                                <div className="overview-text">
                                    <h3>5 years job</h3>
                                    <p>Experience</p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="overview-item">
                                <div className="overview-icon">
                                    {/* clipboard icon */}
                                    <Clipboard2Check/>
                                </div>
                                <div className="overview-text">
                                    <h3>100+ Projects</h3>
                                    <p>Completed</p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="overview-item">
                                <div className="overview-icon">
                                    {/* support icon */}
                                    <Headset/>
                                </div>
                                <div className="overview-text">
                                    <h3>Support</h3>
                                    <p>Online 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Overview