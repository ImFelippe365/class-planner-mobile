export const formatDisciplineName = (discipline) =>
	discipline.split("-")[1]
		.split("(")[0]
		.trim();