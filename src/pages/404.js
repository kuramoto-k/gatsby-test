import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
export default function About({ data }) {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Link to="/">go back</Link>
    </Layout>
  )
}