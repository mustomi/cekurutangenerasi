const question = document.getElementById("question");
const answer = document.getElementById("answer");
const respon = document.getElementById("respon");
const button = document.getElementById("btn");

let init = 0;

const botSay = (data) => {
    const thisYear = 2023;
    const yourYear = data?.tahun;
    let count = thisYear - yourYear;
    
    let cekGen = "";
    
    if (yourYear <= 1945) {
        cekGen = "Anda Generasi Pre Boomer"
    } else if (yourYear >= 1946 && yourYear <= 1964) {
        cekGen = "Anda Generasi Baby Boomer"
    } else if (yourYear >= 1965 && yourYear <= 1980) {
        cekGen = "Anda Generasi X"
    } else if (yourYear >= 1981 && yourYear <= 1996) {
        cekGen = "Anda Generasi Y"
    } else if (yourYear >= 1997 && yourYear <= 2012) {
        cekGen = "Anda Generasi Milenial / Gen Z"
    } else {
        cekGen = "Anda Post Generasi Z / Gen Alpha"
    };

    const yourEge = data?.usia;

    let detailGen = "";

    if (yourEge >= 78) {
        detailGen = "Mempunyai jiwa kepemimpinan yang tinggi serta bertanggungjawab, Berjiwa patriotisme yang tidak perlu diragukan, Kurang berani berpendapat karena kebebasan berpendapat begitu dibatasi, Memiliki berbagai pengalaman yang melewati berbagai zaman, Taat hukum dan kewajiban dan Sangat berhati-hati dan konservatif ketika membelanjakan uang."
    } else if (yourEge <= 77 && yourEge >= 59) {
        detailGen = "Berkomitmen, Mandiri, Kompetitif, Mempunyai karakter yang matang karena ditempa oleh keadaan yang sulit, Tetap mempertahankan adat istiadat dang cenderung kolot , Tidak suka terhadap kritik, Pekerja keras dan pantang menyerah, Workaholic, Setia dan rela bekerja keras untuk anak-anak dan keluarga"
    } else if (yourEge <= 58 && yourEge >= 43) {
        detailGen = "Lebih individualitas, pragmatis, sinis, Lebih toleran terhadap berbagai gaya hidup dan perbedaan kultur, Senang mengambil resiko dan mampu bertanggungjawab, Banyak akal atau cerdas (resourceful), Logis (logical) dan Pemecah masalah yang baik"
    } else if (yourEge <= 42 && yourEge >= 27) {
        detailGen = "Milenial memiliki tingkat pendidikan yang baik, cerdas teknologi, Berani, inovatif, kreatif, modern, Lebih terbuka terhadap perubahan, Jadwal kerja yang fleksibel, Pengembangan karir sebagai faktor yang penting, Punya ekspektasi yang tinggi, Menuntut dapat jawaban yang instan, Berpikiran terbuka, Memiliki keterampilan yang beragam, Mampu mengerjakan pekerjaan yang banyak dalam waktu yang bersamaan, Tidak sabar, Partisipatif dan Tidak menganut paham hirarki atau level kekuasaan, yang berarti semua orang memiliki level yang setara sehingga mereka bersikap sama baik kepada atasan maupun rekan kerja"
    } else if (yourEge <= 26 && yourYear >= 11) {
        detailGen = "Suka berkolaborasi dalam melakukan pekerjaan, Fleksibel, Menyukai tantangan dan dimotivasi oleh pencapaian, Suka mencari cara yang baru dalam menyelesaikan masalah, Tech savvy (mahir teknologi), Suka mengumbar privasi, Mandiri, Toleran, Suka berkomunikasi secara maya dan Memiliki ambisiZ"
    } else {
        detailGen = "Adaptif, Bermain dengan permainan yang berbasis aplikasi, Lebih banyak waktu yang dihabiskan di depan layar, Pembelajaran berfokus pada mempelajari skill, Gaya bekerja yang kolaboratif, Gen alpha lebih mengutamakan pendidikan sehingga akan menginvestasikan waktunya lebih lama untuk menempuh pendidikan, Tidak membutuhkan struktur otoritas yang sama, hirarki, atau pendekatan kekuasaan tradisional karena generasi ini lebih kolaboratif, Generasi yang paling digitally savvy (paling mahir dunia digital) dan Keterampilan interpersonal menjadi hal yang lebih penting dibandingkan generasi sebelumnya"
    };
    
    return [
    "Siapa nama anda?",
    `Selamat datang ${data?.nama}. Tahun berapa anda lahir?`,
    `Usia anda adalah ${count} tahun. ${cekGen}. Karakteristik generasi anda, Tuliskan Usia!`,
    `karakteristik generasi ini ${detailGen}`,
    ]
};

question.innerHTML = botSay()[0];

const botStart = () => {
    init++;
    if (init === 1) {
       botDelay({nama : answer.value})[init]
    } else if (init === 2) {
       botDelay({tahun : answer.value})[init]
    } else if (init === 3) {
        button.textContent = "Selesai"
        answer.style.display = "none"
        setTimeout (() => {
            question.classList.remove('fs-3')
            question.classList.add('fs-6')
        }, [2000])
        botDelay({usia : answer.value})[init]
    } else if (init === 4) {
        question.classList.remove('fs-6')
        question.classList.add('fs-3')
        finishing()
    } else {
        end()
    }
};

const botDelay = (userAnswer) => {
    setTimeout (() => {
        question.innerHTML = botSay(userAnswer)[init]
    }, [2000])
    answer.value = ""
};

const finishing = () => {
    question.innerHTML = "Senang dapat berinterakasi"
    answer.style.display = "none"
    button.textContent = "Akhiri"
} 

const end = () => {
    button.style.display = "none"
    respon.style.display = "none"
    question.innerHTML = "Terimakasih, Sudah Mencoba..."
    setTimeout (() => {
        window.location.reload()
    }, [5000])
}

