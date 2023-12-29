import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from "./components/ui/button";

/* import viteLogo from '/vite.svg' */
/* import './App.css' */
import { Input } from './components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

const API_METHODS = ['GET', 'POST', 'PUT', 'Patch', 'DELETE'];

const App = () => {
	const [count, setCount] = useState(0);
	const [selectedApiMethod, setSelectedApiMethod] = useState<string>('get');
	const [requestValue, setRequestValue] = useState<string>('https://jsonplaceholder.typicode.com/todos/1');
	const [result, setResult] = useState('');

	const handleSubmit : () => Promise<void> = async()  => {
		const result = await (await fetch(requestValue, {method: selectedApiMethod})).text();

		setResult(result);
		console.log('result :>> ', result);
	};

	return (
		<div className="hidden h-full flex-col md:flex">
			<div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
				<h2 className="text-lg font-semibold">Playground</h2>
				<div className="ml-auto flex w-full space-x-2 sm:justify-end">
					<Button variant="secondary" onClick={() => setCount((count) => count + 1)}>
					count is {count}
					</Button>
				</div>
			</div>
			<Separator />
			<Tabs defaultValue="complete" >
				<div className="container h-full py-6">
					<div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
						<div className="hidden flex-col space-y-4 sm:flex md:order-2">
							<div className="grid gap-2">
								<TabsList className="grid grid-cols-3">
									<TabsTrigger value="complete">
										<span className="sr-only">Complete</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="none"
											className="h-5 w-5"
										>
											<rect
												x="4"
												y="3"
												width="12"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="4"
												y="7"
												width="12"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="4"
												y="11"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="4"
												y="15"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="8.5"
												y="11"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="8.5"
												y="15"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="13"
												y="11"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
										</svg>
									</TabsTrigger>
									<TabsTrigger value="insert">
										<span className="sr-only">Insert</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="none"
											className="h-5 w-5"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
												fill="currentColor"
											></path>
											<rect
												x="4"
												y="15"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="8.5"
												y="15"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="13"
												y="15"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
										</svg>
									</TabsTrigger>
									<TabsTrigger value="edit">
										<span className="sr-only">Edit</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="none"
											className="h-5 w-5"
										>
											<rect
												x="4"
												y="3"
												width="12"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="4"
												y="7"
												width="12"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="4"
												y="11"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="4"
												y="15"
												width="4"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<rect
												x="8.5"
												y="11"
												width="3"
												height="2"
												rx="1"
												fill="currentColor"
											></rect>
											<path
												d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
												fill="currentColor"
											></path>
										</svg>
									</TabsTrigger>
								</TabsList>
							</div>
						</div>
						<div className="md-order-1">
							<TabsContent value="complete" className="flex-1">
								<div className="flex h-full flex-col space-y-4">
									<div>
										<label htmlFor="sendRequest" className="block text-sm font-medium leading-6 text-gray-900">
											Send Request
										</label>
										<div className="relative mt-2 rounded-md shadow-sm">

											<div className="absolute inset-y-0 left-0 flex items-center">

												<Select onValueChange={(value) => {
													console.log('value :>> ', value);
													setSelectedApiMethod(value);
												}} defaultValue={selectedApiMethod}>
													<SelectTrigger className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
														<SelectValue placeholder="Method" />
													</SelectTrigger>
													<SelectContent>
														{API_METHODS.map(apiMethod => {
															return (
																<SelectItem key={apiMethod} value={apiMethod.toLowerCase()}>{apiMethod}</SelectItem>
															);
														})}
													</SelectContent>
												</Select>

											</div>
											<Input id="sendRequest" value={requestValue} onChange={(event) => {
												setRequestValue(event.target.value);
											}} className='block w-full rounded-md border-0 py-1.5 pr-20 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
											<div className="absolute inset-y-0 right-0 flex items-center">
												<Button onClick={handleSubmit}>Submit</Button>
											</div>
										</div>
									</div>
									<Textarea
										contentEditable={false}
										placeholder="Here the result will be"
										className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
										value={result || ''}
									/>
									<div className="flex items-center space-x-2">
										<Button>Submit</Button>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="insert" className="flex-1">
								<div className="container h-full py-6">
						Change your password here.
								</div>
							</TabsContent>
						</div>
					</div>

				</div>
			</Tabs>

		</div>
	);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<Input />
			<div className="card">
				<Button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
};

export default App;
