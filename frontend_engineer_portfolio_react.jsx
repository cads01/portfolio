import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [repos, setRepos] = useState([]);

  const GITHUB_USERNAME = "cads01"; // 🔴 replace

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  const projects = [
    {
      title: "Event Management Platform",
      desc: "Full-stack event system with admin panel and dynamic UI",
      details: "Built with React, Bootstrap, Node.js, MySQL. Features include CRUD events, admin dashboard, and responsive UI optimization.",
      link: "event-app-rho-seven.vercel.app",
    },
    {
      title: "Donation Platform",
      desc: "Payment-integrated donation system",
      details: "Integrated Paystack/Flutterwave, backend APIs, receipt generation, and admin tracking dashboard.",
      link: "#",
    },
  ];

  const blogs = [
    {
      title: "Optimizing React Performance",
      snippet: "How I improved load time using lazy loading and code splitting.",
    },
    {
      title: "Building Scalable UI Systems",
      snippet: "Component architecture strategies for large apps.",
    },
  ];

  return (
    <div className={dark ? "dark bg-gray-900 text-white min-h-screen p-6" : "bg-gray-50 text-gray-900 min-h-screen p-6"}>
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <Button onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Adedolapo Adeniyi Samuel</h1>
        <p className="mt-2">Frontend Engineer (React | Vue | Angular)</p>
        <p className="text-sm mt-2 opacity-70">
          Building high-performance web apps for global teams
        </p>
      </div>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Card key={i} className="p-4">
              <CardContent>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="opacity-70">{p.desc}</p>
                <p className="text-sm mt-2">{p.details}</p>
                <Button className="mt-3">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GitHub Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">GitHub Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <Card key={i}>
              <CardContent>
                <h3 className="font-bold">{repo.name}</h3>
                <p className="text-sm">{repo.description}</p>
                <a href={repo.html_url} target="_blank">
                  <Button className="mt-2">View Repo</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {blogs.map((b, i) => (
            <Card key={i}>
              <CardContent>
                <h3 className="font-bold">{b.title}</h3>
                <p className="text-sm">{b.snippet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <form
          action="https://formspree.io/f/mjgpdzyk" // 🔴 replace
          method="POST"
          className="max-w-md mx-auto space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border rounded"
            required
          />
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </div>
  );
}
