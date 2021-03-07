import React from 'react'
import './BenefitHero.scss'

export function BenefitHero() {
    return (
        <div className="benefit-hero flex">
            <h2>Key benefits of using task management software</h2>
            <div className="keys">
                <section className="one-place">
                    <h4>Keep tasks in one place</h4>
                    <p>Save time, avoid losing work and information, delegate, and track tasks to stay on schedule and hit deadlines.</p>
                </section>
                <section className="prioritize">
                    <h4>Prioritize your work</h4>
                    <p>Tracking tasks allows everyone to understand which are more important or require more time, so teams can plan their time and meet deadlines.</p>
                </section>
            </div>
        </div>
    )
}
