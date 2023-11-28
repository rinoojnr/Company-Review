const Review = require('../models/company');


exports.postReview = async(req,res) =>{
    console.log(req.body,"================================")
    const companyName = req.body.company;
    const pros = req.body.pros;
    const cons = req.body.cons;
    const rating = req.body.rating;
    const data = await Review.create({
        company: companyName,
        pros: pros,
        cons: cons,
        rating: rating
    });
    res.status(200).json(data);
}

exports.getReview = async (req,res) =>{
    const data = await Review.findAll({where: {company: req.body.company}});
    let totalRating = 0;
    for(let i=0;i<data.length;i++){
        totalRating+=data[i].rating;
    }
    let avgRating = totalRating/data.length;
    const mainData = {comapnyName:req.body.company,companyRating:avgRating,data}

    res.status(201).json(mainData);
}