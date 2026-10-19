//#region node_modules/.nitro/vite/services/ssr/assets/tool-files-Jw2roL7I.js
/** Small browser-only helpers shared by the Phase 1 tools. */
function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1048576).toFixed(2)} MB`;
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 2e3);
}
function downloadDataUrl(dataUrl, filename) {
	const a = document.createElement("a");
	a.href = dataUrl;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
}
function stripExtension(name) {
	return name.replace(/\.[^.]+$/, "");
}
function savingsLabel(before, after) {
	if (after >= before) return "already optimised";
	return `${Math.round((before - after) / before * 100)}% smaller`;
}
//#endregion
export { stripExtension as a, savingsLabel as i, downloadDataUrl as n, formatBytes as r, downloadBlob as t };
