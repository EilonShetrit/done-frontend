import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AboutHero } from '../../cmps/AboutHero/AboutHero'
import { BenefitHero } from '../../cmps/BenefitHero/BenefitHero'
import './HomePage.scss'

export function HomePage() {
    return (
        <div className="home-page">
            <div className="container">
                <section className="main-hero flex">
                    <h1>The only task tool you need for task management and lists</h1>
                    <p>Task manager software to keep track of individual tasks and get them done faster with Done.</p>
                    <button><Link to="/board">Get Started</Link></button>
                </section>
                <AboutHero />
                <BenefitHero />
                <section className="manage">
                    <h1>Manage your tasks with Done starting today</h1>
                    <p>And get more done.</p>
                    <section className="quate flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg>
                        <p>“With Done, we're able to keep track of each piece of work, in one place.”</p>
                    </section>
                    <p>—Sarah Wormser, Classpass</p>
                    <button><Link to="/board">Try for free</Link></button>
                </section>
            </div>
        </div>
    )
}

