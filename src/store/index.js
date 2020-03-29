import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      
      'Computing',
      'Phones & Tablets',
      'Electronics',
      'Fashion',
      'Health & Beauty',
      'Acessories'
    ],
    products : [
      {
        id: 1,
        name: 'Hp 15 AMD Dual Core E2 9000e 500GB HDD, 4GB RAM, WLAN, Webcam, Windows 10',
        price: '120',
        otherimg: ['https://ng.jumia.is/cqxDZl1JiNHSoRgdXAHdr1IPteE=/fit-in/500x500/filters:fill(white)/product/39/544424/1.jpg?9546',
        
        'https://ng.jumia.is/cqxDZl1JiNHSoRgdXAHdr1IPteE=/fit-in/500x500/filters:fill(white)/product/39/544424/1.jpg?9546',
        
        'https://ng.jumia.is/JdT9OAkoSnZSUuonLTnx-RNJJc4=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/59/906323/1.jpg?2153'
      ],
        productDetails: 'SuperMulti DVD DriveA SuperMulti DVD±RW DL will let you read and write optical media so you can watch DVDs and create backups of your documents.802.11ac Dual-Band Wi-Fi & Bluetooth 4.2With dual-band Wi-Fi, you can connect to the 5 GHz band for faster speeds, or connect to the 1.5 GHz band for an improved wireless transmission range. You’ll also be able to pair additional compatible wireless peripherals and devices using Bluetooth 4.2 technology.2 x USB 3.0 Type-A - 1 x USB 2.0 Type-AThe HP 15 has two USB 3.0 Type-A ports and one USB 2.0 Type-A port that will allow you to connect peripherals such as hard drives, printers, and memory card readers. At 5 Gb/s, USB 3.0 transfers data up to 10 times faster than USB 2.0, which operates at 480 Mb/s. USB 3.0’s high-speed transfer rate helps to significantly reduce data transfer times, meaning you spend less time waiting and more time focusing on the task at hand.Video ConferencingEquipped with a built-in 720p webcam, stereo speakers, and a microphone, the HP 15 can be used for work-related video conferencing as well as video chatting with friends and family.SecurityEquipped with Trusted Platform Module (TPM), the HP 15 provides you with hardware-based encryption to help secure your data, email, and user credential Estimated Battery life will vary depending on various factors including product model, configuration, loaded applications, features, use, wireless functionality, and power management settings. The maximum capacity of the battery will naturally decrease with time and usage. See www.bapco.com for additional details. Recharges your battery up to 90% within 90 minutes when the system is off (using “shut down” command). Recommended for use with the HP adapter provided with the notebook, not recommended with a smaller capacity battery charger. After charging has reached 90% capacity, charging speed will return to normal speed. Charging time may vary +/-10% due to System tolerance. Available on select HP Spectre, HP Envy, HP Omen and HP Pavilion PC models. See http://store.hp.com for a full list of product features. Multi-core is designed to improve performance of certain software products. Not all customers or software applications will necessarily benefit from use of this technology. Performance and clock frequency will vary depending on application workload and your hardware and software configurations. AMD’s numbering is not a measurement of clock speed. AMD and Radeon are trademarks of Advanced Micro Devices, Inc. Burst frequency performance varies depending on hardware, software and overall system configuration',
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/698762/1.jpg?1760'
      },
      {
        id: 2,
        name: 'Hp Elitebook X360 1030 Intel Core I7-8550U, 16GB DDR4, 512GB PCle NVMe TLC SSD',
        price: '600,000',
        otherimg: ['https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/447534/2.jpg?3995',
        
        'https://ng.jumia.is/14mJ7-D_TlLRlTiF8ktNHC1BVww=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/10/498534/1.jpg?8662',
        
        'https://ng.jumia.is/lI3fUwUX53T_1WBFeYZemz3hJz8=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/25/649752/1.jpg?4287'
      ],
        
        
      productDetails: 'Intel Core i7-8550U, 16GB DDR4, 512GB PCle NVMe TLC SSD, 13.3" FHD BV LED UWVA u-Slim Touchscreen, Wacom AES 2.0 Pen wApp Launch Btn, Intel 8265 ace 2x2  nvP+BT 4.2 WW 2Ant WNC SRAV-1 NFC, Huawei ME906S LTE HSPA+, Win 10pro 64. 3 years warranty. Direct bonded with Corning Gorilla Glass 4 and camera (1920 x 1080), 16 GB DDR4-2133 SDRAM , which comes in a 1 x 16 configuration, helps to ensure smooth multitasking and also allows the computer to quickly access frequently used files and programs., 512 GB PCIe Gen 3x4 NVMe SSD, Bang & Olufsen Integrated premium speakers, Full size Backlit keyboard,  Intel Dual band Wireless-AC 8265 802.11ac (2x2) Wi-Fi with Bluetooth 4.2 Combo. Type-A ports also doubles as a fast charging port. USB 3.1 Gen 1 and USB 3.0 are synonymous.delivers a sharp, clear picture, and you will be able to output video to an external display at resolutions up to 4K @ 24 Hz using the HDMI 1.4b output. For long-term storage of your files, a 512GB NVMe PCIe M.2 SSD offers quick access to your data. Other integrated features include a 720p IR webcam, multi-array microphones, and stereo speakers with Bang & Olufsen HD audio.NFC-enabled devices can act as electronic identity documents and keycards. NFC offers a low-speed connection with simple setup that can be used to bootstrap more capable wireless connections.',
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/447534/1.jpg?3995'
      },
       {
        id: 3,
        name: 'DELL XPS 27-7760 ALL-IN-ONE DESKTOP -COREI7, 16GB, 2TB HDD 27" 4GB, WINDOW 10',
        price: '800,000',
        otherimg: ['https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/95/517834/2.jpg?0812',
        
        'https://ng.jumia.is/rEimVCF8G4LDEJ_rneJ0pxaQaLw=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/95/517834/1.jpg?4412'
      ],
        
      productDetails: 'Everyday computing just got easier with the combined strength and style of the Dell XPS 27-7760 27" All-in-One Desktop PC. Enjoy true reliability with a simple, yet powerful value-packed Desktop that gets the job done. The Intel Core i7-6700 3.4GHz Processor matched with the 16GB DDR4-2133 Memory makes the Dell XPS 27-7760 27" All-in-One Desktop PC a speedy and efficient PC. The 2 TB SATA HDD provides ample space to store all crucial data safely. The Dell XPS 27-7760 27" All-in-One Desktop PC is pre-loaded with Windows 10 Home (64-Bit) which offers a user-friendly interface.',
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/517834/1.jpg?0812'
      },
       {
        id: 4,
        name: 'Samsung Galaxy A51 6.5-Inch (4GB,128GB ROM), (48MP +12MP + 5MP + 5MP) + 32MP',
        price: '110,000',
        productDetails: 'Following in the tradition of the powerful Samsung A series, here comes the Samsung Galaxy A51 smartphone. The A51 mobile features a 6.5 inch (102.0 cm) display with a screen resolution of 1080 x 2400 pixels and runs on Android 10.0 operating system. The super smart device is powered by Octa-core (2.3 GHz, Quad core, Cortex A73 + 1.7 GHz, Quad core, Cortex A53) processor paired with 4GB of RAM and 128GB ROM. The battery has 4000mAh capacity  With the quad rear camera and aselfie camera of 32MP you are sure of fantastic and quality photos.',
        otherimg: ['https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/99/513254/2.jpg?0705',
        
        'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/99/513254/3.jpg?0705',
        
        'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/99/513254/4.jpg?0705'
      ],
        
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/513254/1.jpg?7232'
      },
       {
        id: 5,
        name: 'Apple IPhone 11 Pro Max 6.5-Inch Super Retina (4GB RAM, 64GB ROM),iOS 13',
        price: '500,000',
        productDetails: 'Apple IPhone 11 Pro Max 6.5-Inch Super Retina (4GB RAM, 64GB ROM),iOS 13, (12MP+12MP+12MP)+12MP 4G LTE Smartphone- Single Sim',
        otherimg: ['https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/19/008154/2.jpg?1158',
        
        'https://static.jumia.com.ng/cms/external/pet/AP044MT1EWAWANAFAMZ/ebbd44145ce31e70d79b7ba23aa2bab6.jpg',

        'https://static.jumia.com.ng/cms/external/pet/AP044MT1EWAWANAFAMZ/dd83f3fbd45dbb9dc24f88f207cbfb52.jpg',
        
        'https://static.jumia.com.ng/cms/external/pet/AP044MT1EWAWANAFAMZ/c64081ec3021480cea44e309e8eb8633.jpg'
      ],
        
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/008154/1.jpg?1158'
      },
       {
        id: 6,
        name: 'Djack Djack 5.1ch Poweful Bluetooth Home Theatre',
        price: '47,000',
        productDetails: 'Channels: 6 Power Output: 5000 Watts Speaker Type: Tower Other Features: Supports MP3, WMA format music, with FM radio. Clear sound, high-quality acoustic effect Distortion: 0.7% 9W .Compatible with DVD, TV, USB, FM radio, SD card ',
        otherimg: ['https://ng.jumia.is/oXKyjAbdUEajy5BbDoeP9gQ_VSs=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/54/44296/1.jpg?4768',
        
      ],
        
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/773972/1.jpg?8707'
      },
       {
        id: 7,
        name: 'Hot 10.1 64GB+4G Tablet PC Octa 8 Core HD WIFI Bluetooth',
        price: '30,000',
        productDetails: 'Name:4G+64GB Android 7.0 Tablet PC Octa 8 Core HD WIFI Bluetooth 2 SIM 4G 10.1',
        otherimg: ['https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/32/121143/2.jpg?4377',
        
        'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/32/121143/3.jpg?4372',
        
        'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/32/121143/4.jpg?4372'
      ],
        
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/121143/1.jpg?4377'
      },
       {
        id: 8,
        name: 'Samsung Premuim 82inch QLED 2019 Model UHD 4k HDR Smart TV Q60R',
        price: '1,800,000',
        productDetails: 'Genuine cinematic colour made from over a billion shades 100% Colour volume',
        otherimg: ['https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/755864/1.jpg?7328',
        
        'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/12/755864/2.jpg?7328'
      ],
        
        img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/755864/1.jpg?7328'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})