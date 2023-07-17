export const formatDisciplineName = (discipline) => {
	if (!discipline) return '';
	return discipline.split("-")[1]
		.split("(")[0]
		.trim();
}