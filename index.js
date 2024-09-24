// action W
// document.querySelector("button").addEventListener("click", () => handleClick("hai"));

// function handleClick (greet) {
//     alert(`Hello FSW 2 ${greet}`);
// }

// Action Semua
// Memilih button ke-4 (indeks dimulai dari 0)
console.log(document.querySelectorAll("button")[3]);


let totalButton = document.querySelectorAll("button").length;


for(let i = 0; i < totalButton; i++) {
    console.log(i)
    // Menambahkan event listener ke button pertama (indeks 0)
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        // alert("halo fsw 2 dari button index" + i);

        // lakuin sesuatu setelah button nya di klik
        // let audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        // merubah warna style
        this.style.color = "blue";

        switch(this.innerHTML) {
            case "w" :
                var tom1 = new Audio("Sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a" :
                let tom2 = new Audio("Sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s" :
                let tom3 = new Audio("Sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d" :
                let tom4 = new Audio("Sounds/tom-4.mp3");
                tom4.play(); 
                break;
            case "j" :
                let snare = new Audio("Sounds/snare.mp3");
                snare.play();
                break;
            case "k" :
                let kick = new Audio("Sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l" :
                let crash = new Audio("Sounds/crash.mp3");
                crash.play();
                break;
            default:
                // Tidak perlu aksi pada default jika tidak ada input lain
        }

        // Menghapus animasi 2 detik
        setTimeout(() => {
            this.style.color = "";
        }, 2000);

        
    });
}





