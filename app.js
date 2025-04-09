document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");
    const dynamicMenu = document.getElementById("dynamicMenus");

    const pages = {
        Home: `
    <section class ="home">
        <div class="home-img">
            <img src ="headshot.jfif"alt="">
        </div>
        <div class="home-content">
            <h1>Hi, i'm <span> Sanval</span></h1>
            <h3 class="typing-text"> I'm a <span></span></h3>
            <p> My expertise spans a wide range of programming languages, including SQL, Java, Python, C/C++, and C#, as well as modern frameworks like React and jQuery. I specialize in crafting both web and desktop applications that enhance business productivity and streamline operations.

                From developing intuitive user interfaces and working with Microsoft and ERP/CRM software to implementing secure cloud solutions using AWS and Azure, I’ve honed my skills in diverse environments. My experience in database management, system testing, and troubleshooting makes me adept at ensuring smooth software transitions and ongoing support.
                
                Whether it’s automating tasks with VBA macros, building robust systems, or collaborating with cross-functional teams to deliver data-driven solutions, my focus is always on creating high-quality software that makes a tangible impact.
                
                Explore my work, and feel free to reach out if you’re interested in discussing how I can help you bring your software development projects to life.</p>
                <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                </div>
                <a href="#" class="btn"> Contact me</a>
        </div>
    </section>
        `,
        Skills: `
    <section class ="skills">
        <h1> WIP </h1>
    </section>
        `,
        Education: `
    <section class ="education">
        <h1> WIP </h1>
    </section>
        `,
        Experience: `
    <section class ="experience">
        <h1> WIP </h1>
    </section>
        `,
        Contact: `
    <section class ="contact">
        <h1> WIP </h1>
    </section>
        `,
    };

    window.addEventListener("load",function(){
        let i=0;
        for(let key in pages){
            let li = document.createElement("li");
            li.innerHTML = `<a href="#${key}" class="${
                i == 0 ? "active" : ""
            }">${key}</a>`;
            dynamicMenu.appendChild(li);
            i++;
        }
    });

    window.addEventListener("hashchange", () => {
        loadPage(window.location.hash);
    });

    function loadPage(hash){
        const page = hash.replace("#","");
        contentDiv.innerHTML=pages[page] || pages.Home;
        setActiveLink(page);
    }

    function setActiveLink(page){
        links = document.querySelectorAll("nav ul li a");
        links.forEach(link => {
            link.classList.toggle("active",link.getAttribute("href").includes(page))
        });
    }

    loadPage(window.location.hash);
});