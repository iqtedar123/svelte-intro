export interface RecipeI {
	vegetarian: boolean;
	vegan: boolean;
	glutenFree: boolean;
	dairyFree: boolean;
	veryHealthy: boolean;
	cheap: boolean;
	veryPopular: boolean;
	sustainable: boolean;
	lowFodmap: boolean;
	weightWatcherSmartPoints: number;
	gaps: Gaps;
	preparationMinutes: number;
	cookingMinutes: number;
	aggregateLikes: number;
	healthScore: number;
	creditsText: string;
	sourceName: string;
	pricePerServing: number;
	extendedIngredients: Ingredient[];
	id: number;
	title: string;
	readyInMinutes: number;
	servings: number;
	sourceUrl: string;
	image: string;
	imageType: ImageType;
	summary: string;
	cuisines: string[];
	dishTypes: string[];
	diets: string[];
	occasions: string[];
	instructions: string;
	analyzedInstructions: AnalyzedInstruction[];
	originalId: null;
	spoonacularSourceUrl: string;
	license?: string;
}

export interface AnalyzedInstruction {
	name: Name;
	steps: Step[];
}

export enum Name {
	Empty = '',
	PreparingDippingSauce = 'Preparing Dipping Sauce'
}

export interface Step {
	number: number;
	step: string;
	ingredients: Ent[];
	equipment: Ent[];
	length?: Length;
}

export interface Ent {
	id: number;
	name: string;
	localizedName: string;
	image: string;
	temperature?: Length;
}

export interface Length {
	number: number;
	unit: Unit;
}

export enum Unit {
	Fahrenheit = 'Fahrenheit',
	Minutes = 'minutes'
}

export interface Ingredient {
	id: number;
	aisle: string;
	image: null | string;
	consistency: Consistency;
	name: string;
	nameClean: null | string;
	original: string;
	originalName: string;
	amount: number;
	unit: string;
	meta: string[];
	measures: Measures;
}

export enum Consistency {
	Liquid = 'LIQUID',
	Solid = 'SOLID'
}

export interface Measures {
	us: Metric;
	metric: Metric;
}

export interface Metric {
	amount: number;
	unitShort: string;
	unitLong: string;
}

export enum Gaps {
	No = 'no'
}

export enum ImageType {
	Jpg = 'jpg'
}
