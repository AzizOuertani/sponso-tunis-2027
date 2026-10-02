# Fork it! — Tunis 2027 : conversion HTML/CSS

## Ouvrir le dossier

Décompresser le ZIP, puis ouvrir `index.html` dans Chrome, Firefox ou Safari.
Conserver les fichiers et le dossier `assets` ensemble.

- `index.html` : les 12 pages à la suite, avec une navigation légère.
- `pages/page-01.html` à `pages/page-12.html` : chaque page séparément.
- `styles.css` : styles et polices locales.
- `viewer.js` : mise à l'échelle pour adapter les pages à la largeur disponible.
- `assets/fonts` : polices partielles reconstruites à partir des lettres du PDF.
- `assets/artwork/page-XX.png` : fonds graphiques sans les textes principaux.
- `assets/artwork/page-XX.svg` : éléments vectoriels extraits ; certains masques et effets du PDF sont imparfaitement pris en charge par les navigateurs.
- `assets/images` : photos et images extraites, disponibles séparément.
- `content.json` : textes HTML avec leurs positions et styles.
- `source-text.txt` : extraction du contenu textuel du PDF pour référence.

## Pour Painture

Utiliser tout le dossier, y compris les ressources ; copier seulement le HTML ferait perdre les images et les polices.
Si Painture accepte les dossiers ou les ZIP, lui transmettre cette archive. Sinon, lui fournir le HTML, le CSS et les ressources selon son mode d'import.

Instruction suggérée :

> Reproduis ce dossier de sponsoring Fork it! Tunis 2027 à partir des fichiers HTML, CSS et assets fournis. Conserve les 12 pages, leur ordre, le format portrait, les textes anglais, les offres, les montants, les couleurs, les photos et les positions. Utilise le code comme référence de mise en page. Commence par une reproduction fidèle ; applique les modifications que je te demanderai ensuite. Les textes principaux sont des éléments HTML modifiables. Les fonds et certains logos sont des éléments graphiques, et les images originales sont aussi fournies séparément.

## Ce qui est modifiable

Les textes principaux sont de vrais éléments HTML, sélectionnables et modifiables. Leur disposition conserve les coordonnées du document de départ : chaque page mesure 1190 × 1684 pixels. Les pages sont réduites à l'écran sans réorganiser le contenu en colonnes mobiles.

Les photos, logos, cartes et effets graphiques sont regroupés dans les fonds pour préserver le rendu des masques du PDF. Ils peuvent être remplacés ou reconstruits avec les fichiers d'images et SVG fournis ; ils ne sont pas tous des objets HTML indépendants.

Les polices locales contiennent les lettres présentes dans le document. Lors d'un changement de texte, certains nouveaux caractères peuvent utiliser Arial en remplacement. Pour une refonte importante, choisir une police complète et contrôler de nouveau les longueurs de lignes.

La conversion est une reconstruction du PDF, avec de petits écarts possibles de typographie et d'espacement. Les liens externes présents dans le PDF sont conservés lorsqu'ils sont exploitables.

## Vérification

Les 12 pages ont été affichées dans Chromium et comparées aux pages source. Le chargement des ressources et la mise à l'échelle sur un écran de 390 pixels ont été contrôlés. Aucun serveur, framework ou outil de compilation n'est nécessaire pour consulter le dossier.
