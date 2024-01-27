 document.addEventListener('DOMContentLoaded', function() {
           
     const navLinks = document.querySelectorAll('ul a');
     const sidebar = document.getElementById("sidebar")

           
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    sidebar.style.display="e"

                    const targetId = this.getAttribute('href').substring(1);

                    document.getElementById(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
     
     if (window.innerWidth >= 791) {
         sidebar.style.display="flex"
     }
     
        });