// Sistema de autenticación y control de acceso
(function() {
    'use strict';
    
    // Verificar si hay usuario logueado
    var currentUser = null;
    try {
        var savedUser = localStorage.getItem('currentUser');
        currentUser = savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
        console.error('Error al leer usuario:', e);
    }
    
    if (!currentUser) {
        // No hay usuario logueado, redirigir al login
        window.location.href = 'index.html';
        return;
    }
    
    // Definir permisos por página
    var pagePermissions = {
        'consultant-portal.html': ['consultor'],
        'operational-view.html': ['consultor', 'gerente'],
        'executive-view.html': ['gerente'],
        'predictive-analytics.html': ['gerente']
    };
    
    // Obtener nombre de la página actual
    var currentPage = window.location.pathname.split('/').pop();
    
    // Verificar si el usuario tiene permiso para esta página
    if (pagePermissions[currentPage]) {
        var allowedRoles = pagePermissions[currentPage];
        if (allowedRoles.indexOf(currentUser.type) === -1) {
            alert('No tienes permiso para acceder a esta página');
            window.location.href = 'index.html';
            return;
        }
    }
    
    // Función para ocultar enlaces según el rol del usuario
    function hideUnauthorizedLinks() {
        var navMenu = document.querySelector('.nav-menu');
        if (!navMenu) {
            // Si no encuentra el menú, intentar de nuevo en 100ms
            setTimeout(hideUnauthorizedLinks, 100);
            return;
        }
        
        var links = navMenu.querySelectorAll('a[href$=".html"]');
        
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            var href = link.getAttribute('href');
            var page = href.split('/').pop();
            
            // Verificar si la página requiere permisos
            if (pagePermissions[page]) {
                var allowedRoles = pagePermissions[page];
                
                // Si el usuario no tiene permiso, ocultar el enlace
                if (allowedRoles.indexOf(currentUser.type) === -1) {
                    link.style.display = 'none';
                }
            }
        }
    }
    
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideUnauthorizedLinks);
    } else {
        // DOM ya está listo
        hideUnauthorizedLinks();
    }
    
    // Función para obtener el usuario actual (disponible globalmente)
    window.getCurrentUser = function() {
        return currentUser;
    };
    
    // Función de logout (disponible globalmente)
    window.logout = function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    };
})();

// Made with Bob
