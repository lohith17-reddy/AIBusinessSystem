# 🤖 NovaTech Electronics — AI Business Support Assistant

An AI-powered customer support website for **NovaTech Electronics**, built as part of the DataTeach.ai Project-1 assignment.

The system combines a modern React/Vite business website with an **n8n-powered AI customer support chatbot**. The chatbot uses a predefined business knowledge base and Groq's LLM to answer customer questions about products, pricing, delivery, returns, payments, and company policies.

---

## 🌐 Live Demo

### 🚀 Website
**https://nova-tech-website-weld.vercel.app/**

### 📂 GitHub Repository
**https://github.com/lohith17-reddy/AIBusinessSystem**

---

## 📌 Project Overview

NovaTech Electronics is a fictional online electronics store based in Chennai, Tamil Nadu, India.

The project provides customers with:

- Product information
- Product pricing and specifications
- Delivery information
- Return and cancellation policies
- Refund information
- Payment options
- Warranty information
- Customer support information

The website includes an embedded AI chatbot that acts as a **NovaTech Electronics support employee** rather than a general-purpose chatbot.

---

## ✨ Features

### 🏪 Business Website

- Responsive modern website
- Home section
- About section
- Products and services
- Product category filtering
- Product details
- Delivery and return policies
- Contact section
- AI customer support section

### 🤖 AI Customer Support

The chatbot can answer questions related to:

- Product prices
- Product specifications
- Warranty
- Delivery times
- Delivery charges
- Returns
- Cancellations
- Refunds
- Payment methods
- NovaTech business information
- Customer support information

The chatbot is designed to stay within the NovaTech business knowledge base and avoid inventing information.

### 🧠 AI Workflow

The chatbot workflow is built using:

```text
Customer
   ↓
n8n Chat Trigger
   ↓
Basic LLM Chain
   ↓
Groq Chat Model
   ↓
Business Knowledge + System Prompt
   ↓
Customer Response
