import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Politique de confidentialité - GlassUp',
  description: 'Politique de confidentialité de la plateforme GlassUp',
}

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-[#0F171E]">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="GlassUp"
              width={150}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
        <p className="text-gray-400 mb-8">Dernière mise à jour : Novembre 2024</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              GlassUp SAS (ci-après « GlassUp », « nous ») s'engage à protéger la vie privée des
              utilisateurs de sa plateforme. Cette politique de confidentialité explique comment nous
              collectons, utilisons, partageons et protégeons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Données collectées</h2>
            <h3 className="text-xl font-medium text-white mb-3">2.1 Données d'identification</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale</li>
              <li>Dénomination sociale</li>
              <li>Numéro SIRET</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">2.2 Données professionnelles</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extrait Kbis</li>
              <li>Qualifications professionnelles</li>
              <li>Assurances professionnelles</li>
              <li>RIB</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">2.3 Données de navigation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Date et heure de connexion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Finalités du traitement</h2>
            <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Création et gestion de votre compte utilisateur</li>
              <li>Fourniture des services de mise en relation</li>
              <li>Traitement des paiements</li>
              <li>Communication avec vous (notifications, support)</li>
              <li>Amélioration de nos services</li>
              <li>Respect de nos obligations légales</li>
              <li>Prévention de la fraude</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Base légale du traitement</h2>
            <p>Le traitement de vos données personnelles est fondé sur :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>L'exécution du contrat</strong> : pour fournir nos services</li>
              <li><strong>Le consentement</strong> : pour les communications marketing</li>
              <li><strong>L'intérêt légitime</strong> : pour améliorer nos services</li>
              <li><strong>L'obligation légale</strong> : pour respecter la réglementation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Destinataires des données</h2>
            <p>Vos données peuvent être partagées avec :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les autres utilisateurs de la plateforme (garages/techniciens) dans le cadre des missions</li>
              <li>Nos prestataires de services (hébergement, paiement, analytics)</li>
              <li>Les autorités compétentes en cas d'obligation légale</li>
            </ul>
            <p className="mt-4">
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire aux finalités
              pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Données de compte : pendant la durée de votre inscription + 3 ans</li>
              <li>Données de transaction : 10 ans (obligations comptables)</li>
              <li>Données de navigation : 13 mois</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à : dpo@glassup.fr
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL
              (www.cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données personnelles contre tout accès non autorisé, modification,
              divulgation ou destruction :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>Chiffrement des données sensibles au repos</li>
              <li>Contrôle d'accès strict</li>
              <li>Audits de sécurité réguliers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de
              petits fichiers texte stockés sur votre appareil.
            </p>
            <h3 className="text-xl font-medium text-white mb-3 mt-4">Types de cookies utilisés :</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques</strong> : pour comprendre l'utilisation du site</li>
              <li><strong>Cookies fonctionnels</strong> : pour mémoriser vos préférences</li>
            </ul>
            <p className="mt-4">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Transferts internationaux</h2>
            <p>
              Vos données peuvent être transférées et traitées dans des pays situés en dehors de
              l'Union Européenne, notamment aux États-Unis (hébergement Vercel). Ces transferts
              sont encadrés par des garanties appropriées (Clauses Contractuelles Types).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Modifications</h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité à tout moment. Vous serez
              informé de toute modification significative par email ou par notification sur la plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données
              personnelles :<br /><br />
              <strong>Délégué à la Protection des Données (DPO)</strong><br />
              Email : dpo@glassup.fr<br />
              Adresse : [Adresse à compléter]
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-[#00A8E1] hover:underline inline-flex items-center gap-2"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
