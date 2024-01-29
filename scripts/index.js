 document.addEventListener('DOMContentLoaded', function() {
           
     const navLinks = document.querySelectorAll('ul a');
     const sidebar = document.getElementById("sidebar")

           
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (window.innerWidth <= 690) {
                        sidebar.style.display="none"
                    } else sidebar.style.display="flex"

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