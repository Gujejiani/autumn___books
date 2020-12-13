import flower1 from '../../assets/img/flower.jpg'
import flower2 from '../../assets/img/flower-1.jpg'
import flower3 from '../../assets/img/flower-2.jpg'
import flower4 from '../../assets/img/flower-3.jpg'
import flower5 from '../../assets/img/flower-4.jpg'
import flower6 from '../../assets/img/flower-5.jpg'
import flower7 from '../../assets/img/flower-6.jpg'
import flower8 from '../../assets/img/flower-7.jpg'
import flower9 from '../../assets/img/flower-9.jpg'
import flower10 from '../../assets/img/flower-10.jpg'


//reusable component to display images in containers, using ID of components to display corectly the images


export const putpictures = (number) => {
    switch (number) {
        case "7wJAAAAAYAAJ":
            return flower1

        case "2bCdaZ7KvDsC":
            return flower2

        case "nF0EAAAAYAAJ":
            return flower3


        case "x6NgAAAAcAAJ":
            return flower4

        case "MHfjZvl3U8EC":
            return flower5

        case "ucLYY59wO04C":
            return flower6

        case "TAo0AQAAMAAJ":
            return flower7
        case "WZ4wAAAAYAAJ":
            return flower8

        case "eyk7mW5skHQC":
            return flower9

        case "07ZZAAAAMAAJ":
            return flower10


        default: return flower1

    }
}