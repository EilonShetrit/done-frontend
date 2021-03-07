import React from 'react'
import './AboutHero.scss'
export function AboutHero() {
    return (
        <div className="about-hero">
            <section className="what-us">
                <p>What is task management?</p>
                <p>Task management is more than a to-do list. It means tracking tasks from beginning to end, delegating subtasks to teammates, and setting deadlines to make sure projects get done on time. Task management software, like Done, empowers to work more productively and efficiently.</p>
            </section>
            <section className="why-us">
                <h3>Why do you need team task management software?</h3>
                <p>Do you waste time organizing sticky notes, searching your email and to-do lists, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
            </section>
            <button>About Us</button>
        </div>
    )
}

