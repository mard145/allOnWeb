const express = require('express')
const mongoose = require('mongoose')

const indexPage = (req, res)=>{
        res.render('index')
}

const aboutPage = (req, res)=>{
        res.render('about')
}

const contactPage = (req, res)=>{
        res.render('contact')
}

const storePage = (req, res)=>{
        res.render('store')
}

const adminPage = (req, res)=>{
        res.render('admin')
}

module.exports = {indexPage, aboutPage, contactPage, storePage, adminPage}