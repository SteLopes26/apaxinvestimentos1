$files = Get-ChildItem -Path . -Filter *.html

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    if ($content -match 'href="styles.css\?v=.*?\"') {
        $newContent = $content -replace 'href="styles.css\?v=.*?"', 'href="styles.css?v=mobile_v3"'
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated version in $($file.Name)"
    }
    else {
        # Fallback if no version param found
        $newContent = $content -replace 'href="styles.css"', 'href="styles.css?v=mobile_v3"'
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Added version to $($file.Name)"
    }
}
