import Footer from './_components/Footer';
import Nav from './_components/Nav';
import About from './_components/sections/About';
import CodeSnippets from './_components/sections/CodeSnippets';
import Contact from './_components/sections/Contact';
import Blog from './_components/sections/Blog';
import Experience from './_components/sections/Experience';
import Hero from './_components/sections/Hero';
import Projects from './_components/sections/Projects';
import Skills from './_components/sections/Skills';
import CursorGlow from './_components/ui/CursorGlow';

export default function Home() {
	return (
		<>
			<CursorGlow />
			<Nav />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Blog />
				<CodeSnippets />
				<Experience />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
