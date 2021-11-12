let paths = ui.specSelectors.specJson().get("paths");
paths.mapKeys((key, path) => {
    path.mapKeys((k, p) => {
            console.log(`${key}, ${k.toUpperCase()}`);
    });
});
