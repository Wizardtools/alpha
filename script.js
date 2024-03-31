

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores del formulario
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const productValue = document.getElementById('productValue').value;

    // Crea una nueva fila en la tabla
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productQuantity}</td>
        <td>${productValue}</td>
        <td><button class="deleteBtn">X</button></td>
    `;

    // Añade la nueva fila al cuerpo de la tabla
    document.getElementById('inventoryBody').appendChild(newRow);

    // Añade evento de eliminar a cada botón de la fila
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(btn => {
        btn.onclick = function(e) {
            const tr = e.target.parentElement.parentElement;
            document.getElementById('inventoryBody').removeChild(tr);
        };
    });

    // Limpia el formulario
    document.getElementById('productForm').reset();
});







var notes = [];

function addNote() {
    var noteText = document.getElementById("noteInput").value;
    var reminderDate = document.getElementById("reminderInput").value;

    var note = {
        text: noteText,
        reminder: reminderDate
    };

    notes.push(note);
    displayNotes();
}

function displayNotes() {
    var notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    notes.forEach(function(note, index) {
        var noteItem = document.createElement("div");
        noteItem.classList.add("note-item");
        noteItem.innerHTML = "<p>" + note.text + "</p><p>Reminder: " + note.reminder + "</p>";

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Eliminate";
        deleteButton.onclick = function() {
            deleteNote(index);
        };

        noteItem.appendChild(deleteButton);
        notesList.appendChild(noteItem);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

// Función para contar palabras en el texto
document.getElementById('textArea').addEventListener('input', function() {
    const text = this.value;
    const words = text.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
        document.getElementById('wordCount').textContent = 'Number of Words: ' + words.length;
    } else {
        document.getElementById('wordCount').textContent = 'Number of Words: 0';
    }
});

// Función para iniciar el temporizador
var timerInterval;
var timerSeconds = 0;
function startTimer() {
    timerInterval = setInterval(function() {
        timerSeconds++;
        var hours = Math.floor(timerSeconds / 3600);
        var minutes = Math.floor((timerSeconds % 3600) / 60);
        var seconds = timerSeconds % 60;
        document.getElementById("timerDisplay").innerText = hours.toString().padStart(2, '0') + ":" +
                                                             minutes.toString().padStart(2, '0') + ":" +
                                                             seconds.toString().padStart(2, '0');
    }, 1000);
}

// Función para detener el temporizador
function stopTimer() {
    clearInterval(timerInterval);
}

// Funciones para el planificador Pomodoro
var pomodoroInterval;
var pomodoroSeconds = 25 * 60;
var breakSeconds = 5 * 60;
function startPomodoro() {
    pomodoroInterval = setInterval(function() {
        pomodoroSeconds--;
        var minutes = Math.floor(pomodoroSeconds / 60);
        var seconds = pomodoroSeconds % 60;
        document.getElementById("pomodoroDisplay").innerText = minutes.toString().padStart(2, '0') + ":" +
                                                                 seconds.toString().padStart(2, '0');
        if (pomodoroSeconds <= 0) {
            clearInterval(pomodoroInterval);
            alert("¡Pomodoro completado! Tómate un descanso.");
        }
    }, 1000);
}

function startBreak() {
    clearInterval(pomodoroInterval);
    pomodoroSeconds = 5 * 60; // 5 minutos de descanso
    startPomodoro();
}

/*INTENSE PRODUCTIVITY*/ 
// script.js
document.getElementById('saveTask').addEventListener('click', function() {
    const mainTask = document.getElementById('mainTask').value;
    document.getElementById('todayTask').textContent = mainTask ? mainTask : "Ninguna tarea definida.";
});

// Cargar una cita motivacional
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dailyQuote').textContent = `"${data.content}" — ${data.author}`;
    })
    .catch(() => {
        document.getElementById('dailyQuote').textContent = "No se pudo cargar la cita del día.";
    });







document.addEventListener('DOMContentLoaded', function() {
    const progressInput = document.getElementById('progressInput');
    const progressDisplay = document.getElementById('progressDisplay');
    const motivationalMessage = document.getElementById('motivationalMessage');
    const goalInput = document.getElementById('goalInput');
    const setGoalButton = document.getElementById('setGoalButton');
    const goalDisplay = document.getElementById('goalDisplay');

    let goal = 'Define your goal for the day';
    let progress = 0;

    // Mostrar la meta inicial en la página
    goalDisplay.textContent = goal;

    // Establecer la meta del día
    setGoalButton.addEventListener('click', function() {
        goal = goalInput.value;
        goalDisplay.textContent = goal;
        goalInput.value = ''; // Limpiar el input después de establecer la meta
        updateMotivationalMessage(0); // Reiniciar el mensaje motivacional
    });

    // Actualizar el progreso y el mensaje motivacional
    progressInput.addEventListener('change', function() {
        progress = progressInput.value;
        progressDisplay.textContent = `Progreso: ${progress}%`;

        updateMotivationalMessage(progress);
    });

    // Función para actualizar el mensaje motivacional basado en el progreso
    function updateMotivationalMessage(progress) {
        if(progress < 25) {
            motivationalMessage.textContent = '¡A great start! Keep it up.';
        } else if(progress < 50) {
            motivationalMessage.textContent = '¡You are going for the good way! keep the rhythm.';
        } else if(progress < 75) {
            motivationalMessage.textContent = '¡More than a half! Your goal is close.';
        } else if(progress < 100) {
            motivationalMessage.textContent = '¡Almost there! do not give up.';
        } else {
            motivationalMessage.textContent = '¡Objective reached! Excellent work.';
        }
    }
});


// Avatar 


// cookies 

