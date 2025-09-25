# BNS Driving School Website

A modern, responsive website for a local driving school — **[BNS Driving School](https://www.bnsDrivingSchool.com)** — built with performance, accessibility, and mobile responsiveness in mind.

## 🚀 Overview

This project is a fast, SEO-optimized, and fully responsive website developed using **Next.js (Pages Router)**. It provides a clean and professional online presence for BNS Driving School, with key features like dark mode support and optimized asset delivery via AWS infrastructure.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Hosting:** [Amazon S3](https://aws.amazon.com/s3/)
- **Deployment:** [Amazon CloudFront](https://aws.amazon.com/cloudfront/)
- **Styling:** Tailwind CSS
- **Dark Mode:** Enabled via Tailwind CSS

---

## 🌐 Live Site

👉 [www.bnsDrivingSchool.com](https://www.bnsDrivingSchool.com)

---

## 🔑 Features

- ✅ **SEO Optimized** – Meta tags, clean URLs, and fast load times
- 📱 **Fully Responsive** – Works beautifully across desktops, tablets, and smartphones
- 🌒 **Dark Mode Support** – Automatically adapts to user’s system preference
- ⚡ **High Performance** – Optimized assets and image loading
- ☁️ **Cloud Hosting** – Scalable and secure deployment using AWS (S3 + CloudFront)

---

## 📦 Deployment Workflow

1. **Build the site**:

    Build the site locally using npm build

2. **Export the static site**:

    Export the static site using npm export

3. **Upload contents of `out/` to AWS S3**

4. **Serve globally via CloudFront for high-speed delivery and CDN caching**
