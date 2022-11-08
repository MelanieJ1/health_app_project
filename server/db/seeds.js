
use health_data
db.dropDatabase()

db.medicalImages.insertMany([
    {
        "title": "MRI Brain Scan ",
        "patient_name": "Jane Smith",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/212/4837876/PMC4837876_CMJ-128-407-g001.png?keywords=subdural%20effusion,hematomas,subdural%20hematoma"
    },

    {
        "title": "Hand X-ray",
        "patient_name": "Jane Smith",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/397/5117157/PMC5117157_10.1177_2324709616677064-fig2.png?keywords=deformity"

    },

    {
        "title": "Ultrasound - Liver",
        "patient_name": "Jane Smith",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/293/4900112/PMC4900112_gr1.png?keywords=lipomatous%20neoplasm,angiomyolipoma"

    },

    {
        "title": "Ultrasound - Spleen",
        "patient_name": "Jane Smith",
        "img_url": "https://openi.nlm.nih.gov/imgs/512/268/5034021/PMC5034021_JoU-2016-0027-g002.png?keywords="
    },

])

db.medicalResults.insertMany([


    {
        "title": "Blood Test Report",
        "test_date" : "5 September 2021",
        "patient_name": "Jane Smith",
        "white_cell_count": "5.00 x 10^9 /L",
        "platelets":"300 x 10^9 /L",
        "neutrophils": "5.0 x 10^9 /L",
        "lymphocytes": "2.0 x 10^9 /L",
        "monocytes": "0.5 x 10^9 /L",
        "eosinohils": "0.02 x 10^9 /L%",
        "basophils": "0.05 x 10^9 /L",
        "erythrocyte_sedimentation_rate": "5.0 mm/hr",
        "red_blood_cell_count": "4.0 x 10^12 /L" ,
        "haemoglobin_level": "120 g/L",
        "red_blood_cell_mcv": "82 fL",
        "hemoglobin_mch": "30 pg",
        "glucose_level": "5.0 mmol/L",
        "total_cholesterol": "NA",
        "triglycerids": "NA",
        "hdl_cholesterol": "NA",
        "ldl_cholesterol": "NA",
        "alanine_aminotransferase": "NA",
        "albumin": "NA",
        "serum_total_protein": "NA",
        "alkaline_phosphatase": "NA",
    },

    {
        "title":"Blood Test Report - Lipid Panel",
        "test_date": "12 March 2022",
        "patient_name": "Jane Smith",
        "white_cell_count": "5.00 x 10^9 /L",
        "platelets":"300 x 10^9 /L",
        "neutrophils": "5.0 x 10^9 /L",
        "lymphocytes": "2.0 x 10^9 /L",
        "monocytes": "0.5 x 10^9 /L",
        "eosinohils": "0.02 x 10^9 /L%",
        "basophils": "0.05 x 10^9 /L",
        "erythrocyte_sedimentation_rate": "5.0 mm/hr",
        "red_blood_cell_count": "4.0 x 10^12 /L" ,
        "haemoglobin_level": "120 g/L",
        "red_blood_cell_mcv": "82 fL",
        "hemoglobin_mch": "30 pg",
        "glucose_level": "5.0 mmol/L",
        "total_cholesterol": "6 mmol/L",
        "triglycerids": "1.80 mmol/L",
        "hdl_cholesterol": "1.5 mmol/L",
        "ldl_cholesterol": "3.0 mmol/L",
        "alanine_aminotransferase": "NA",
        "albumin": "NA",
        "serum_total_protein": "NA",
        "alkaline_phosphatase": "NA",

    },

    {
        "title":"Blood Test Report - Metabolic Panel",
        "test_date": "10 August 2022",
        "patient_name": "Jane Smith",
        "white_cell_count": "5.00 x 10^9 /L",
        "platelets":"300 x 10^9 /L",
        "neutrophils": "5.0 x 10^9 /L",
        "lymphocytes": "2.0 x 10^9 /L",
        "monocytes": "0.5 x 10^9 /L",
        "eosinohils": "0.02 x 10^9 /L%",
        "basophils": "0.05 x 10^9 /L",
        "erythrocyte_sedimentation_rate": "5.0 mm/hr",
        "red_blood_cell_count": "4.0 x 10^12 /L" ,
        "haemoglobin_level": "110 g/L",
        "red_blood_cell_mcv": "82 fL",
        "hemoglobin_mch": "30 pg",
        "glucose_level": "5.0 mmol/L",
        "total_cholesterol": "6 mmol/L",
        "triglycerids": "NA",
        "hdl_cholesterol": "NA",
        "ldl_cholesterol": "NA",
        "alanine_aminotransferase": "28 U/L",
        "albumin": "40 g/L",
        "serum_total_protein": "70 g/L",
        "alkaline_phosphatase": "50 U/L",


    },
    
])

db.medicalReports.insertMany([

    {
        "title": "Liver Ultrasound Report",
        "patient_name": "Jane Smith",
        "report": "Liver has no fatty deposits.  No unusual growths or lesions.  Gallbladder is free of gallstones.  Scaring is absent.  Liver size is regular and shows no abnormalities."

    },

    {
        "title": "Spleen Utrasound Report",
        "patient_name": "Jane Smith",
        "report":"Normal (not splenomegaly): the maximum length is less than 11 cm",
    },

    {
        "title": "Hand X-ray Report",
        "patient_name": "Jane Smith",
        "report":"Erosion and demineralisation of bone indicating polyarthritis",
    },

    {
        "title": "MRI Brain Scan Report",
        "patient_name": "Jane Smith",
        "report":"SEQUENCES: Sagittal FLAIR and coronal T2-weighted images are supplemented by axial T1, T2, and FLAIR images. There is diffuse dilatation of sulci and ventricles. There has been extensive tissue loss in the right cerebral hemisphere due to an old insult,presumably an ischemic event. This primarily involves the right temporal/occipital region and is associated with obvious ex vacuo prominence of the right lateral ventricle. There is wallerian degeneration of the corticospinal tracts/cerebral peduncle",
    },



])

db.medications.insertMany([
    {
        medication: "Paracetemol",
        date: "2022-11-18",
        active: true

    }
    
])

db.supplements.insertMany([

    {

        supplement: "Vitamin C",
        date: "2022-11-10",
        active: true

        
    }
])


