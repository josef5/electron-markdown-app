import { renderMarkdown } from "./markdown";
import Elements from "./elements";

Elements.MarkdownView.addEventListener("input", async () => {
  const markdown = Elements.MarkdownView.value;

  renderMarkdown(markdown);

  const hasChanges = await window.api.checkForUnsavedChanges(markdown);
  Elements.SaveMarkdownButton.disabled = !hasChanges;

  await window.api.checkForUnsavedChanges(markdown);
});

Elements.OpenFileButton.addEventListener("click", () => {
  window.api.showOpenDialog();
});

Elements.ExportHtmlButton.addEventListener("click", () => {
  const html = Elements.RenderedView.innerHTML;

  window.api.showExportHtmlDialog(html);
});

Elements.SaveMarkdownButton.addEventListener("click", async () => {
  const markdown = Elements.MarkdownView.value;

  window.api.saveFile(markdown);
});

Elements.ShowFileButton.addEventListener("click", () => {
  window.api.showInFolder();
});

Elements.OpenInDefaultApplicationButton.addEventListener("click", () => {
  window.api.openInDefaultApplication();
});
