import Resume from "../models/Resume.js";
import ai from "../configs/ai.js"

//controller for enhancing a resume's professional summary
//POST: /api/ai/enhance-professional-summary 
export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const {userContent} = req.body;

    if(!userContent){
     return res.status(400).json({message: 'Missing required fields'})
        }

     const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
            {  role: "system", content: "You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly, and only return text no options or anything else." 
            },
           {
            role: "user",
            content: userContent,
           },
    ],
        })

        const enhancedContent = response.choices[0].message.content
        return res.status(200).json({enhancedContent})
    } catch (error) {
     return res.status(400).json({message: error.message})   
    }
}


//controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
    try {
        const {userContent} = req.body;

    if(!userContent){
     return res.status(400).json({message: 'Missing required fields'})
        }

     const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
            {  role: "system", content: "You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should be only in 1-2 sentence also highlighting key responsibilities and achievements. Use action verbs and quantifiable results where possible. Make it ATS-friendly. and only return text no options or anything else." 
            },
           {
            role: "user",
            content: userContent,
           },
    ],
        })

        const enhancedContent = response.choices[0].message.content
        return res.status(200).json({enhancedContent})
    } catch (error) {
     return res.status(400).json({message: error.message})   
    }
}


// contoller for uploading a resume to the database
//POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;

    console.log("Received title:", title)
    console.log("Received resumeText length:", resumeText?.length)
    console.log("userId:", req.userId)
    console.log("Model:", process.env.OPENAI_MODEL)

    const userId = req.userId

    if (!resumeText || !title) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const systemPrompt = "You are an expert AI agent that extracts structured data from resumes. Always return valid JSON only."

    const userPrompt = `Extract data from this resume: ${resumeText}
     
Return ONLY a valid JSON object in this exact format with no additional text:

{
  "professional_summary": "",
  "skills": ["skill1", "skill2"],
  "personal_info": {
    "image": "",
    "full_name": "",
    "profession": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [
    {
      "company": "",
      "position": "",
      "start_date": "",
      "end_date": "",
      "description": "",
      "its_current": false
    }
  ],
  "project": [
    {
      "name": "",
      "type": "",
      "description": ""
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field": "",
      "graduation_date": "",
      "cgpa": ""
    }
  ]
}`

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    //   response_format: { type: 'json_object' }
    })

    const extractedData = response.choices[0].message.content
    const cleaned = extractedData.replace(/```json|```/g, '').trim()
    const parsedData = JSON.parse(cleaned)
    const newResume = await Resume.create({ userId, title, ...parsedData })

    res.json({ resumeId: newResume._id })

  } catch (error) {
    console.error('FULL ERROR:', error)  // ← check backend terminal for exact error
    return res.status(400).json({ message: error.message })
  }
}