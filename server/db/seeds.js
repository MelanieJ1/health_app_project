import { dblClick } from "@testing-library/user-event/dist/click"

use health_data
db.dropDatabase()

db.scans.insertMany([
    {
        "name": "MRI Brain Scan ",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/212/4837876/PMC4837876_CMJ-128-407-g001.png?keywords=subdural%20effusion,hematomas,subdural%20hematoma"
    },

    {
        "name": "Hand X-ray",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/397/5117157/PMC5117157_10.1177_2324709616677064-fig2.png?keywords=deformity"

    },

    {
        "name": "Ultrasound - Liver",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/293/4900112/PMC4900112_gr1.png?keywords=lipomatous%20neoplasm,angiomyolipoma"

    },

    {
        "name": "Ultrasound - Spleen",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/268/5034021/PMC5034021_JoU-2016-0027-g002.png?keywords="
    },



])