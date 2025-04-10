 /* agenda */
 
 // Script para el selector de días
 const dayButtons = document.querySelectorAll('.day-btn');
 const dayContents = document.querySelectorAll('.day-content');

 dayButtons.forEach(button => {
   button.addEventListener('click', () => {
     dayButtons.forEach(btn => btn.classList.remove('active'));
     button.classList.add('active');
     dayContents.forEach(content => content.classList.add('hidden'));
     const day = button.getAttribute('data-day');
     document.getElementById(day).classList.remove('hidden');
   });
 });

 // Script para el despliegue de detalles
 const agendaItems = document.querySelectorAll('.agenda-item');
 agendaItems.forEach(item => {
   const header = item.querySelector('.agenda-header');
   const details = item.querySelector('.agenda-details');
   const toggleIcon = item.querySelector('.toggle-icon');

   if (details) { // Solo añadir el evento si hay detalles (tareas pendientes)
     header.addEventListener('click', () => {
       const isVisible = !details.classList.contains('hidden');
       details.classList.toggle('hidden');
       toggleIcon.classList.toggle('fa-chevron-down');
       toggleIcon.classList.toggle('fa-chevron-up');
     });
   }
 });

  /* Ayuda lifty */

  const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const voiceBtn = document.getElementById('voice-btn');
    const photoBtn = document.getElementById('photo-btn');

    // Función para añadir un mensaje al chat
    function addMessage(content, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', isUser ? 'user-message' : 'lifty-message');
      messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll al final
    }

    // Respuestas predefinidas de Lifty (simuladas)
    function getLiftyResponse(userMessage) {
      userMessage = userMessage.toLowerCase();
      if (userMessage.includes('matemáticas') || userMessage.includes('sumas')) {
        return `
          <p>¡Entiendo! Vamos con las sumas. <i class="fas fa-calculator"></i></p>
          <p>Ejemplo: 2 + 3 = 5</p>
          <p><i class="fas fa-apple-alt"></i> <i class="fas fa-apple-alt"></i> + <i class="fas fa-apple-alt"></i> <i class="fas fa-apple-alt"></i> <i class="fas fa-apple-alt"></i> = 5 manzanas</p>
          <p>¿Quieres practicar más? Escribe un problema, por ejemplo: "2 + 4".</p>
        `;
      } else if (userMessage.includes('lengua') || userMessage.includes('cuento')) {
        return `
          <p>¡Hacer un cuento es divertido! <i class="fas fa-book"></i></p>
          <p>Piensa en: <i class="fas fa-user"></i> ¿Quién? (Ejemplo: Un perro)</p>
          <p><i class="fas fa-map"></i> ¿Dónde? (Ejemplo: En el parque)</p>
          <p><i class="fas fa-question"></i> ¿Qué pasa? (Ejemplo: Encuentra un amigo)</p>
          <p>Escribe tu idea y te ayudo.</p>
        `;
      } else if (userMessage.includes('foto')) {
        return `
          <p>¡Gracias por la foto! <i class="fas fa-camera"></i></p>
          <p>Veo que es un ejercicio. ¿Es de Matemáticas? <i class="fas fa-calculator"></i></p>
          <p>Escribe el problema para ayudarte, por ejemplo: "3 + 5".</p>
        `;
      } else {
        return `
          <p>No entiendo bien tu duda. <i class="fas fa-question"></i></p>
          <p>¿Es sobre Matemáticas, Lengua u otra clase? <i class="fas fa-book"></i></p>
          <p>Escribe más o usa el micrófono. <i class="fas fa-microphone"></i></p>
        `;
      }
    }

    // Enviar mensaje al hacer clic en el botón
    sendBtn.addEventListener('click', () => {
      const message = userInput.value.trim();
      if (message) {
        addMessage(`<p>${message}</p>`, true);
        const liftyResponse = getLiftyResponse(message);
        setTimeout(() => addMessage(liftyResponse), 1000); // Simula un retraso en la respuesta
        userInput.value = '';
      }
    });

    // Enviar mensaje al presionar Enter
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });

    // Simular entrada de voz (en un entorno real, usarías la API de reconocimiento de voz)
    voiceBtn.addEventListener('click', () => {
      const simulatedVoiceMessage = "No entiendo las sumas de Matemáticas";
      addMessage(`<p><i class="fas fa-microphone"></i> ${simulatedVoiceMessage}</p>`, true);
      const liftyResponse = getLiftyResponse(simulatedVoiceMessage);
      setTimeout(() => addMessage(liftyResponse), 1000);
    });

    // Simular envío de foto (en un entorno real, usarías la API de la cámara)
    photoBtn.addEventListener('click', () => {
      addMessage(`<p><i class="fas fa-camera"></i> Foto enviada</p>`, true);
      const liftyResponse = getLiftyResponse('foto');
      setTimeout(() => addMessage(liftyResponse), 1000);
    });


     /* Recursos academicos */

     document.addEventListener('DOMContentLoaded', () => {
        const resourceCards = document.querySelectorAll('.resource-card');
        const resourcesSection = document.querySelector('.resources');
        const detailSection = document.getElementById('resource-detail');
        const detailTitle = document.getElementById('detail-title');
        const detailContent = document.getElementById('detail-content');
        const backButton = document.querySelector('.back-button');
    
        // Contenido de ejemplo para cada recurso
        const resources = {
            math: `
                <p><strong>Videos:</strong> Aprende a sumar y restar con dibujos animados.</p>
                <p><strong>Juegos:</strong> Cuenta manzanas y estrellas en pantalla.</p>
                <p><strong>Ejercicios:</strong> Tarjetas grandes con números y colores.</p>
            `,
            language: `
                <p><strong>Cuentos:</strong> Historias cortas con animales y dibujos.</p>
                <p><strong>Tarjetas:</strong> Palabras con imágenes para aprender.</p>
                <p><strong>Actividades:</strong> Une letras y forma palabras divertidas.</p>
            `,
            science: `
                <p><strong>Experimentos:</strong> Mezcla colores y crea arcoíris.</p>
                <p><strong>Videos:</strong> Descubre cómo crecen las plantas.</p>
                <p><strong>Juegos:</strong> Encuentra animales en la selva.</p>
            `,
            social: `
                <p><strong>Mapas:</strong> Explora tu ciudad con dibujos.</p>
                <p><strong>Historias:</strong> Aprende sobre amigos y vecinos.</p>
                <p><strong>Juegos:</strong> Busca países en un mapa colorido.</p>
            `
        };
    
        // Interactividad de las tarjetas
        resourceCards.forEach(card => {
            card.addEventListener('click', () => {
                const resource = card.getAttribute('data-resource');
                resourcesSection.style.opacity = '0';
                setTimeout(() => {
                    resourcesSection.style.display = 'none';
                    detailSection.style.display = 'block';
                    detailSection.style.opacity = '0';
                    setTimeout(() => {
                        detailSection.style.opacity = '1';
                    }, 50);
                    detailTitle.textContent = card.querySelector('h3').textContent;
                    detailContent.innerHTML = resources[resource];
                }, 300);
            });
    
            // Soporte para teclado
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    card.click();
                }
            });
        });
    
        // Botón Volver
        backButton.addEventListener('click', () => {
            detailSection.style.opacity = '0';
            setTimeout(() => {
                detailSection.style.display = 'none';
                resourcesSection.style.display = 'block';
                resourcesSection.style.opacity = '0';
                setTimeout(() => {
                    resourcesSection.style.opacity = '1';
                }, 50);
            }, 300);
        });
    });