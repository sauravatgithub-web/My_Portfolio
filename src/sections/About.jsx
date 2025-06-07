import { useState } from "react";

const github = import.meta.env.VITE_GITHUB_PROFILE;
const codeforces = import.meta.env.VITE_CODEFORCES_PROFILE;
const leetcode = import.meta.env.VITE_LEETCODE_PROFILE;

function About() {
    const [aboutPageNumber, setAboutPageNumber] = useState(1);

    function handleTilt(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = 'transform 0.1s';
    }

    function resetTilt(e) {
        const card = e.currentTarget;
        card.style.transform = '';
        card.style.transition = 'transform 0.3s ease';
    }

    return (
        <div className='about-section' id='about'>
            <div className='about-section-main'>
                <div className='about-header'>
                    <div className={`.about-header ${aboutPageNumber === 1 ? 'active-tab' : ''} tab1`} onClick={() => setAboutPageNumber(1)}>Me</div>
                    <div className={`.about-header ${aboutPageNumber === 2 ? 'active-tab' : ''} tab2`} onClick={() => setAboutPageNumber(2)}>Academics</div>
                    <div className={`.about-header ${aboutPageNumber === 3 ? 'active-tab' : ''} tab3`} onClick={() => setAboutPageNumber(3)}>Links</div>
                </div>
                <div className={`about-footer ${
                    aboutPageNumber === 1 ? 'me-bg' :
                    aboutPageNumber === 2 ? 'academics-bg' :
                    'links-bg'
                }`}>
                    <div className='about-footer-image'>
                        {aboutPageNumber === 1 &&
                            <img src='/me.png' alt='mePhoto' className='about-image' onMouseMove={handleTilt} onMouseLeave={resetTilt} />
                        }
                        {aboutPageNumber === 2 &&
                            <img src='/academics.png' alt='mePhoto' className='about-image' onMouseMove={handleTilt} onMouseLeave={resetTilt} />
                        }
                        {aboutPageNumber === 3 &&
                            <div className='about-footer-image link-overlay-container'>
                                <img src='/links.png' alt='Links' className='about-image' onMouseMove={handleTilt} onMouseLeave={resetTilt} />

                                {/* GitHub */}
                                <a
                                    href={github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='overlay-icon github-icon'
                                    aria-label='GitHub Profile'
                                />

                                {/* LeetCode */}
                                <a
                                    href={leetcode}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='overlay-icon leetcode-icon'
                                    aria-label='LeetCode Profile'
                                />

                                {/* Codeforces */}
                                <a
                                    href={codeforces}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='overlay-icon codeforces-icon'
                                    aria-label='Codeforces Profile'
                                />
                            </div>
                        }
                    </div>
                    <div className='about-footer-text'>
                        {aboutPageNumber === 1 &&
                            <p className="about-text">
                                Hi, I'm an explorer at heart, passionate about learning and always curious to discover how things work.
                                Whether it's solving coding puzzles or understanding the world better, I believe in growth through effort.
                            </p>
                        }
                        {aboutPageNumber === 2 &&
                            <p className="about-text">
                                Academically, I thrive in maths, problem-solving and computer science concepts. My interests span from literature to history and from basic scienced to algorithms ,data structures and web development.
                                I cleared <span className="highlight">JEE Advance</span> in 2022 with AIR 2207 and then <span className="highlight">GATE Mathematics</span> with AIR 376. I'm currently pursuing a degree in <span className="highlight">Computer Science</span> from IIT Bhubaneswar where I am learning about 
                                <span className="highlight"> Operating Systems</span>, <span className="highlight">Computer Architecture</span>, <span className="highlight">Database Management</span>, <span className="highlight">Computer Networks</span> and <span className="highlight">Compiler Design</span>.
                            </p>
                        }
                        {aboutPageNumber === 3 &&
                            <div className="about-text">
                                <p>
                                    I'm active on platforms like LeetCode, Codeforces, and GitHub.
                                    These help me stay sharp and constantly improve my skills. Feel free to connect and explore my work!
                                </p>
                                <p className='profile-visit-class'> Click on the icons to visit my profiles. Happy visit. 😊😎</p>
                                <p> See <label>CONTACTS</label> to connect on Social Media. </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About